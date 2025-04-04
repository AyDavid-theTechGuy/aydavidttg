const nav = document.querySelector(".navbar");

nav.innerHTML = `
	<div class="container-fluid pt-2 pb-2 px-3">
		<a class="navbar-brand" href="https://aydavidttg.com.ng">
			<span class="material-icons mi-24 pt-1">code</span>
			<span class="brand-name">AyDavid</span>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="material-icons mi-24">menu</span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mx-0 mx-auto">
				<li class="nav-item">
					<a class="nav-link" href="./index.html">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="./webdev-projects.html">Web Dev Projects</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="./react-projects.html">React Projects</a>
				</li>
				<li class="nav-item">
					<a class="nav-link ct" href="./connect.html">Connect</a>
				</li>
			</ul>
		</div>
	</div>
    `;
