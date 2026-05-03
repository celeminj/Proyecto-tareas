<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Rol;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Users extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function rol(){
        return $this->belongsTo(Rol::class, 'rol_id');
    }
}
