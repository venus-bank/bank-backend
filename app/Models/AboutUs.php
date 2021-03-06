<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class AboutUs extends Model
{
  use HasFactory, HasTranslations;

  public $translatable = [
    'title',
    'description',
    'who_are_we',
    'vision',
    'message',
    'clarity_transparency',
    'purpose',
    'commitment',
    'respect',
    'philanthropy',
  ];

  protected $fillable = [
    'title',
    'description',
    'who_are_we',
    'vision',
    'message',
    'clarity_transparency',
    'purpose',
    'commitment',
    'respect',
    'philanthropy',
    'image',
    'is_active'
  ];


  /**
   * get is_active attribute as a boolean.
   */
  public function getIsActiveAttribute()
  {
    return (bool) $this->attributes['is_active'];
  }
}
