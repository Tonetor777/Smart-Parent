# Generated by Django 5.0.3 on 2024-04-11 13:55

import teacher.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='examresult',
            name='file',
            field=models.FileField(upload_to='examresult/', validators=[teacher.models.validate_exam_result]),
        ),
    ]