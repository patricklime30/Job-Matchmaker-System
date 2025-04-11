<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobRecommendation extends Model
{
    protected $fillable = [
        'quiz_id',
        'job_title',
        'description'
    ];
}
