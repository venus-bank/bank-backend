<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1 class='hero-title'>{{ $homeInfo->title }}</h1>
      <p class="hero-description">{!! $homeInfo->description !!}</p>

      {{-- TODO --}}
      <div class="hero-navigation" style="display: none">
        <div class="hero-navigation-item is-active"></div>
        <div class="hero-navigation-item"></div>
        <div class="hero-navigation-item"></div>
      </div>
    </div>
  </div>
</section>
