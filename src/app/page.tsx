<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Republic of Zani</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet">
  <style>
    :root {
      --accent: #00ffc3;
      --dark: #0b0f1a;
      --light: #f9f9f9;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      cursor: none;
    }

    body {
      font-family: 'Orbitron', sans-serif;
      background-color: var(--dark);
      color: white;
      overflow-x: hidden;
    }

    header {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      background: radial-gradient(circle at center, #121722 0%, #0b0f1a 100%);
    }

    header h1 {
      font-size: 4rem;
      color: var(--accent);
      animation: fadeIn 1.5s ease;
    }

    header p {
      font-size: 1.2rem;
      margin-top: 1rem;
      opacity: 0.85;
    }

    section {
      padding: 5rem 2rem;
      max-width: 800px;
      margin: auto;
      text-align: center;
    }

    .coming-soon {
      font-size: 2rem;
      color: var(--accent);
    }

    .newsletter input {
      padding: 0.8rem;
      width: 60%;
      max-width: 300px;
      border: none;
      border-radius: 5px;
      margin-right: 0.5rem;
    }

    .newsletter button {
      padding: 0.8rem 1rem;
      background: var(--accent);
      border: none;
      color: #000;
      font-weight: bold;
      cursor: pointer;
    }

    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.8rem;
      opacity: 0.5;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Custom Cursor */
    .cursor {
      width: 20px;
      height: 20px;
      border: 2px solid var(--accent);
      border-radius: 50%;
      position: fixed;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
    }

  </style>
</head>
<body>
  <div class="cursor" id="cursor"></div>

  <header>
    <h1>Republic of Zani</h1>
    <p>Where Tech Meets the Future</p>
  </header>

  <section>
    <h2>Onze Missie</h2>
    <p>Republic of Zani bouwt de tech van morgen. High-performance producten. Uncompromised design. Coming soon.</p>
  </section>

  <section>
    <h2>Onze Productlijn</h2>
    <p class="coming-soon">🚧 All products coming soon.</p>
  </section>

  <section class="newsletter">
    <h2>Blijf op de hoogte</h2>
    <p>Schrijf je in en ontvang als eerste updates.</p>
    <form>
      <input type="email" placeholder="Jouw e-mailadres" required />
      <button type="submit">Aanmelden</button>
    </form>
  </section>

  <footer>
    &copy; 2025 Republic of Zani. Alle rechten voorbehouden.
  </footer>

  <script>
    // Cursor effect
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  </script>
</body>
</html>
