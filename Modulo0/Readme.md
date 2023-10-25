# Primera entrega

## Pasos realizados:

1. En Visual Studio Code > File > Open folder, creo una carpeta en el escritorio de mi ordenador llamada "*Bootcamp_JavaScript*" y entro en ella. 

2. En mi consolo escrito el comando **"git init"** para inicializar mi repositorio.

3. Me dirijo a la página de GitHub y pincho en "*New*" para crear un nuevo repositorio, le pondré el mismo nombre y dejaré marcada la opción "público".

4. A continuación en la botón "*Code*" copio la URL de mi repositorio que aparece en la pestaña de SSH.

5. Me dirijo de nuevo a VSC y escribo el comando **"git remote add origin"** y pego la URL del repositorio. 

* *Previamente habremos creado una clave SSH y borrado las credenciales de GIT en el administrador de credenciales de Windows y al ejecutar el comando apacerá una ventana emergente que nos solicitará ingresar nuestra clave SSH.* 

6. Para confirmar que nuestros repositorios se han conectado correctamente ejecutamos el comando **"git remote -v"** si aparece la URL de nuestro repositorio remoto significará que la conexión se ha realizado con éxito.

7. En VSC creo una carpeta dentro de mi repositorio que llamaré *"Modulo0"* y dentro de esta carpeta creo varios archivos.

8. Para añadir todos los archivos al staging escribo el comando **"git add ."**.

9. A continuación ejecutamos **"commit -m"** seguido de un comentario aclaratorio entre comillas.

10. Para subir los cambios a nuestro repositorio remoto ejecutamos **"git push"**

11. Para crear una rama escribimos **"git branch**" más el nombre de la rama que queramos poner, en este caso *Development*.

12. Cambiamos a esta rama ejecutando el comando **"git checkout Development"**

13. Realizamos cambios en el archivo .md y ejecutamos los comandos **"git add ."** y **"git commit -m "he realizado cambios en Readme.md"** y por último **git push --set-upstream origin development**

14. Volvemos a la rama master ejecutando **git checkout master"**.

15. Hacemos merge con el comando **"git merge development"**