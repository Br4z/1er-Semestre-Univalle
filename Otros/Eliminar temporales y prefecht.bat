@echo off


title TemporaryCleaner v1.1 ES 
color F


echo ____________________________________________________________________________
echo.
echo = TemporaryCleaner v1.1 ES                                                 =
echo = Descripcion: Elimina archivos temporales de las carpetas temp y prefetch.=
echo = Requisitos: Windows 7 o superior.                                        =
echo = Autor: BrAz                                                              =
echo = Reccuerda ejecutarlo como administrador, de lo contario quedaran algunos =
echo = archivos basura, cosa que veras en la consola por falta de permisos.     =
echo.
echo ____________________________________________________________________________


:inicializar
set /p res=Desea ejecutar el limpiador ? [y/n] 
if %res% == y (
	goto seguir
)else if %res% == n ( 
	goto cancelar
) else (
	echo Entrada invalida, por favor eliga una opcion existente.
	goto inicializar
)

:seguir

del %TEMP% /F /S /Q
rmdir %TEMP% /S /Q
del C:\Windows\Temp /F /S /Q
rmdir C:\Windows\Temp /S /Q
del C:\Windows\Prefetch /F /S /Q 
rmdir C:\Windows\Prefetch /S /Q
color A
echo Limpieza terminada...
echo Muchas gracias por utilizarme !
echo Presione enter para salir del script.
pause >nul
exit

:cancelar
color 4
set /p res2=Desea salir del script? [y/n]
if %res2% == y (
	exit
) else if %res2% == n (
	goto inicializar
) else (
	echo Entrada invalida, por favor eliga una opcion existente.
	goto cancelar	
)




