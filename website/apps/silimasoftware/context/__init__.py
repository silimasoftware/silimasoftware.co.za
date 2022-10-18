from .contact import contact_context
from .about import about_context
from .home import home_context
from .blog import blog_context



def get_view_context(request):
    request.context = {
        "current_page": request.path.split("/")[-2],
        "nav": "src/nav.html",
        "page": request.page,
        "footer": "src/footer.html",
        "function": request.function,
        "template": request.template_path,
        "javascript": [
            request.javascript_path,
        ],
    }
    try:
        context = view_context_factory(request)
    except Exception as e:
        raise e
    else:
        request.context |= context if context else pass_context()

def view_context_factory(request):
    func = {
        "home": home_context,
        "blog": blog_context,
        "about": about_context,
        "contact": contact_context,
    }
    return func[request.page](request)

def no_context(*args, **kwargs):
    return {}

def pass_context(*args, **kwargs):
    pass


