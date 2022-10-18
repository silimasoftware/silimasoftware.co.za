from django.contrib import sitemaps
from django.urls import reverse


class SiteMapHome(sitemaps.Sitemap):
    changefreq = "weekly"
    priority = 0.8
    protocol = "https"

    def items(self):
        return ["wiltonagencies"]

    def location(self, obj):
        return ""


class SiteMapBlog(sitemaps.Sitemap):
    changefreq = "weekly"
    priority = 0.8
    protocol = "https"

    def items(self):
        return ["blog"]

    def location(self, obj):
        return "blog/"


class SiteMapAbout(sitemaps.Sitemap):
    changefreq = "weekly"
    priority = 0.8
    protocol = "https"

    def items(self):
        return ["about"]

    def location(self, obj):
        return "about/"


class SiteMapContact(sitemaps.Sitemap):
    changefreq = "weekly"
    priority = 0.8
    protocol = "https"

    def items(self):
        return ["contact"]

    def location(self, obj):
        return "contact/"
