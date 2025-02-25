from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import csv
from io import TextIOWrapper
@csrf_exempt
def upload_csv(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        try:
            file_data = TextIOWrapper(uploaded_file.file, encoding='utf-8')
            reader = csv.DictReader(file_data)
            data = [row for row in reader]
            return JsonResponse({'data': data}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)
