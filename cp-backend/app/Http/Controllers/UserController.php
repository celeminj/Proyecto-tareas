<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\Users;

class UserController extends Controller
{
      public function index()
    {
        $users = Users::all();
        return response()->json($users);
    }
    
    /** Funcion para el registro */
    public function register(Request $request)
    {

        $validate = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = new Users();
        $user->firstname = $validate['firstname'];
        $user->lastname = $validate['lastname'];
        $user->email = $validate['email'];
        $user->password = Hash::make($validate['password']);
        $user->rol_id = 2;

        $user->save();

        return response()->json(['message' => 'Usuario creado correctamente']);

    }

    public function login(Request $request)
    {

        $user = Users::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    
    }
}
