from core.util import (
    HttpResponse,
    bleach,
    json,
    is_get,
    render,
    logger,
    render,
    messages,
    is_post,
)
from .context import get_view_context


def page_loader_view(request, page="home", function="index"):
    request.page = bleach.clean(page)
    request.function = bleach.clean(function)
    request.template_path = f"pages/{request.page}/index.html"
    request.javascript_path = f"js/{request.page}.js"
    if request.POST.get("action"):
        request.action = bleach.clean(request.POST.get("action"))
    else:
        request.action = request.page

    if is_post(request):
        try:
            get_view_context(request)
        except Exception as e:
            logger.exception(e)
            return HttpResponse(
                json.dumps({"Failed to proccess the request!"}),
                content_type="application/json",
            )

        return HttpResponse(
            json.dumps(request.context), content_type="application/json"
        )

    if is_get(request):
        try:
            get_view_context(request)
        except Exception as e:
            logger.exception(e)
            return page_not_found_view(request, e)

        return render(request, "index.html", request.context)


def page_not_found_view(request, exception):
    messages.error(
        request,
        message="Failed to find the page or resource!",
        extra_tags="warning",
    )
    context = {
        "nav": "src/nav.html",
        "footer": "src/footer.html",
        "template": "src/404.html",
    }
    return render(request, "index.html", context, status=404)


def page_error_view(request):
    messages.error(
        request,
        message="Can I help you?",
        extra_tags="danger",
    )
    context = {
        "nav": "src/nav.html",
        "footer": "src/footer.html",
        "template": "src/500.html",
    }
    return render(request, "index.html", context, status=500)
