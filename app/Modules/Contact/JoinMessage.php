<?php

namespace App\Modules\Contact;

use BaseModel;

/**
 * This is only a helper model for validation.
 *
 * @property int $id
 * @property string $username
 * @property string $email
 * @property string $title
 * @property int $team_id
 * @property string $role
 * @property string $text
 */
class JoinMessage extends BaseModel
{

    protected $fillable = ['username', 'email', 'team_id', 'role', 'text'];

    protected $rules = [
        'username'  => 'required',
        'email'     => 'required|email',
        'team_id'   => 'required|integer|min:1',
        'role'      => 'required|min:3',
        'text'      => 'required|min:3',
    ];

}