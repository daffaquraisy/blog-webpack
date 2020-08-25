function getPosts() {
    fetch('http://localhost:8000/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.data.forEach(post => {
                output += `
                <div class="col-md-4 col-sm-6 mb-2">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="http://localhost:8000/img/${post.photo}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.desc}</p>
                        </div>
                    </div>
                </div>
                
                
                `;
            })
            document.getElementById('output').innerHTML = output;
        })
}
getPosts();