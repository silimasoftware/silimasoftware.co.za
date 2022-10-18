from core.util import (
    is_get,
)


def blog_context(request):
    page_title = "Blog"
    description = "Silima Software Blog"
    key_word_list = [
        "Silima Software Blog",
        "Web Developer Blog",
        "Software Developer Blog",
        "Web Development Blog",
        "Software Development Blog",
        "Python Blog",
        "Django Blog",
    ]
    key_words = ", ".join(map(str, key_word_list))
    if is_get(request):
        return {
            "page_title": page_title,
            "description": description,
            "key_words": key_words,
        }