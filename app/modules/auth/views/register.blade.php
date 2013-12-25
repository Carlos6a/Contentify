<h1 class="page-title">Register</h1>

{{ Form::errors($errors) }}

{{ Form::open(array('url' => 'auth/registration/create')) }}
    {{ Form::smartText('username', 'Username') }}

    {{ Form::smartEmail() }}

    {{ Form::smartPassword() }}

    {{ Form::smartPassword('password2', 'Password') }}

    {{ Form::actions(['submit']) }}
{{ Form::close() }}