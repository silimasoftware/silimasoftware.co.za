from core.util import (
    is_post,
    is_get,
    send_contant_mail
)


def contact_context(request):
    if "support_mail_sent" in request.session:
        if  request.session["support_mail_sent"] >= 5:
            return { "mail_blocked" : True }

    if is_get(request):
        page_title = "Contact Us"
        description = "Contact Silima Software today if you have any questions or would like a quote."
        key_word_list = [
            "Contact Silima Software",
            "Find Web Developer",
            "Find Software Developer",
            "Python Developer",
            "Django Developer",
            "Find Web Developer South Africa",
            "Find Software Developer South Africa",
        ]
        key_words = ", ".join(map(str, key_word_list))
        return {
            "page_title": page_title,
            "description": description,
            "key_words": key_words,
        }

    if is_post(request):      
        return send_contant_mail(request)
