@echo off

rem Запуск веб-сервера
echo Executing npm run dev...
start npm run dev -- --open

rem Запуск проекта в Visual Studio Code
code .
