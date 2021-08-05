## api health check 용 API 만들기

> django framework를 활용해 api를 개발해 배포할 때, 배포가 제대로 되었는지 확인하기 위한 간단한 api입니다.



#### views.py

```python
from rest_framework.generics import GenericAPIView

class ApiHealthCheckView(GenericAPIView):
    def get(self, request):
        return HttpResponse('{}') # 빈 {}만을 반환한다. 
    
```



#### urls.py(inside myapp)

```python
from django.urls import path
from myapp import views # myapp = django 앱 이름

urlpatterns = [
    path('api/healthcheck', views.ApiHealthCheckView.as_view()), # url 설정
]
```



#### urls.py(inside myproject)

```python
from django.urls import include, path

urlpattern = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls'))
]
```

