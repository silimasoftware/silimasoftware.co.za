from core.util import (
    is_get,
)


def home_context(request):
    if is_get(request):
        page_title = "Web Development, Software Development, Python, Django, API, Web Software Development"
        description = "We build secure, scalable web application solutions for startups, and small to medium businesses."
        key_word_list = [
            "Silima Software",
            "Web Development",
            "Software Development",
            "Python",
            "Django",
            "API Development",
            "Web Software Development",
            "Web Development South Africa",
            "Software Development South Africa",
            "Web Hosting",
            "Container Hosting",
        ]
        key_words = ", ".join(map(str, key_word_list))
        return {
            "page_title": page_title,
            "description": description,
            "key_words": key_words,
        }
