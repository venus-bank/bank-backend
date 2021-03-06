<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CityRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, mixed>
   */
  public function rules()
  {
    return [
      'title'             => ['required', 'max:255'],
      'country_id'        => ['required'],
      'city_code'         =>  Rule::when($this->method() === 'POST', ['required', 'unique:cities,city_code'])
    ];
  }
}
