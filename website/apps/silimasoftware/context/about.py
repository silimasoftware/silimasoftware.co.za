from core.util import (
    is_get,
)


def about_context(request):
    page_title = "About Us"
    key_word_list = [
        "About Silima Software",
        "Silima Software Web Development",
        "Silima Software Software Development",
        "Silima Software Web Hosting",
        "Silima Software Container Hosting",
    ]
    key_words = ", ".join(map(str, key_word_list))
    if is_get(request):
        return {
            "page_title": page_title,
            "key_words": key_words,
        }
