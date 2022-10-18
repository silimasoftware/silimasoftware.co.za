from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from silimasoftware.views import (
    page_loader_view,
)
from django.contrib.sitemaps.views import sitemap
from .sitemap import SiteMapHome, SiteMapAbout, SiteMapContact, SiteMapBlog


handler404 = "silimasoftware.views.page_not_found_view"
handler500 = "silimasoftware.views.page_error_view"

sitemaps = {
    "silimasoftware": SiteMapHome,
    "about": SiteMapAbout,
    "blog": SiteMapBlog,
    "contact": SiteMapContact,
}

urlpatterns = [
    path(
        "sitemap.xml",
        sitemap,
        {"sitemaps": sitemaps},
        name="django.contrib.sitemaps.views.sitemap",
    ),
    path("admin/", admin.site.urls),
    path("", page_loader_view, name="silimasoftware"),
    path("<slug:page>/", page_loader_view, name="silimasoftware"),
    path("<slug:page>/<slug:function>/", page_loader_view, name="silimasoftware"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
