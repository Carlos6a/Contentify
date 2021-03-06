<?php 

namespace App\Modules\Shouts\Http\Controllers;

use App\Modules\Shouts\Shout;
use View;
use Widget;

class ShoutsWidget extends Widget
{

    public function render(array $parameters = array())
    {
        $shouts = Shout::orderBy('created_at', 'desc')->with('creator')->take(10)->get();
        
        return View::make('shouts::widget', compact('shouts'))->render();
    }

}