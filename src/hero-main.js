const template = document.createElement('template');

template.innerHTML = `

<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Nunito:wght@400;600&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="css/style.css">

<section class="p-5">

<div class="container mt-5">
    <div class="row">

        <div class="col-md-6 col-sm-12">
            <h5 class="hero-tag">Coolest Articel</h5>
            <h2 class="main-hero-tag">The best blog and productive blog you ever find. Lorem ipsum dolor sit.
                Lorem ipsum dolor sit amet.</h2>

            <p class="pt-4">Be better than yesterday.</p>
            <div class="d-flex">
                <img src="./img/sekiro-samsung-wallpaper.jpg" class="rounded-circle float-left"
                    style="height: 50px; width: 50px;" alt="...">
                <p class="ml-3 mt-2">Daffa Quraisy</p>
            </div>

            <button class="btn my-btn mt-4" id="getPosts">See Post</button>

        </div>

        <div class="col-md-6 col-sm-12">
            <img src="./img/undraw_Bibliophile_hwqc.png" class="img-fluid" style="margin:0;padding:0;">
        </div>

    </div>
</div>

<hr>

</section>
`;

class HeroMain extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('hero-main', HeroMain);