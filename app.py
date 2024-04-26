from flask import Flask, redirect, render_template, url_for, request, flash, session, jsonify

from controller.catalogue import catalogue

app = Flask(__name__)
app.register_blueprint(catalogue)
app.config['SECRET_KEY'] = 'dev'

@app.route('/')
def hello_world():
    return redirect(url_for('/api/login'))

@app.route('/api/login', methods=['GET','POST'])
def login():
    ##Si ya hay un usuario en la cookie, indicar que esta logeado
    if session.get('user_id') != None:
        return jsonify({
            "logged" : True,
            "user" : session['user_id']
            })
    
    ##Si el metodo es get, probablemente es la primera vez que el usuario entra a la pagina
    ## y devolver false
    if request.method == 'GET':
        return jsonify({"logged" : False,
                "user" : None})

    name = request.form.get('username')
    passwd = request.form.get('password')
    ## Si se esta intentando logear a travez de un formulario, validar y devolver el resultado
    if name == '123' and passwd == '123': ##Aqui se puede reemplazar con una consula a la bdS
        session['user_id'] = name #definición de cookie de sesión.
        return jsonify({
            "logged" : True,
            "user" : session['user_id']
            })

    else:
        return jsonify({"logged" : False,
                "user" : None})


@app.route('/api/logout')
def logout():
    session['user_id'] = None
    return redirect(url_for('/api/login'))


if __name__ == '__main__':
    app.run()