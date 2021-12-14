<?php
namespace App\Repositories;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class UserRepo
{
    public function store($request)
    {
        return User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'type'    => $request->type,
            'bio'    => $request->bio,
            'password' => Hash::make($request->password),
        ]);
    }

    public function all(){
        return User::orderBy('id')->paginate('10');
    }
    
}
