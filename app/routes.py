from flask import current_app, render_template, request, redirect, url_for, flash
from flask_login import login_user, login_required, logout_user, current_user
from app import db, login_manager
from app.forms import RegistrationForm, LoginForm
from app.models import User

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@current_app.route('/')
def index():
    return render_template('index2.html')

@current_app.route('/pickup')
def pickup():
    return render_template('pickup.html')

@current_app.route('/cancel')
def cancel():
    return render_template('index2.html')

@current_app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))

    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.check_password(form.password.data):
            login_user(user)
            return redirect(url_for('dashboard'))
        else:
            flash('Login unsuccessful. Please check your email and password.', 'danger')
    return render_template('login.html', form=form)

@current_app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@current_app.route('/register', methods=['GET', 'POST'])
def register():
    print("Register route reached")
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    
    form = RegistrationForm()
    
    if form.validate_on_submit():
        print("Form validated")
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))

    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(email=form.email.data)

        # Check if the email already exists
        existing_user = User.query.filter_by(email=user.email).first()
        if existing_user:
            flash('Email already registered. Please use a different email.', 'danger')
            return redirect(url_for('register'))

        user.set_password(form.password.data)
        db.session.add(user)

        try:
            db.session.commit()
            flash('Your account has been created! You are now able to log in.', 'success')
            return redirect(url_for('login'))
        except Exception as e:
            db.session.rollback()
            flash('An error occurred while registering your account. Please try again.', 'danger')
            current_app.logger.error(f"Registration error: {str(e)}")
            return redirect(url_for('register'))
    return render_template('register.html', form=form)

@current_app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')
