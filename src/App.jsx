import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-wrap">
          <div className="logo">
            <img src="/images/logo.png" alt="Centre d'Affaires Logo" style={{ height: '40px', marginRight: '10px', borderRadius: '8px' }} />
            Centre d'Affaires <span>St-Pacôme</span>
          </div>
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#vision">Notre Vision</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Réserver</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge animate-fade-in">Ouverture 2026</div>
            <h1 className="animate-fade-in">Apprenez, créez et propulsez votre entreprise.</h1>
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Plus qu'un simple bureau, le Centre d'Affaires est un centre de formation continue au cœur du Kamouraska. Maîtrisez l'IA, le marketing et la stratégie dans un environnement stimulant.
            </p>
            <div className="hero-btns animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#services" className="cta-button">Voir les formations</a>
              <a href="#vision" className="secondary-btn">Espace de travail</a>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob"></div>
        </div>
      </section>

      {/* Stats/Problem Section */}
      <section className="problem">
        <div className="container">
          <div className="grid">
            <div className="reveal">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Pourquoi le Centre d'Affaires?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                Les entrepreneurs locaux manquent d'espaces de rencontre professionnels, tandis que le télétravail rime souvent avec isolement. Nous comblons ce fossé avec une infrastructure de pointe au cœur du village.
              </p>
            </div>
            <div className="reveal stats-grid">
              <div className="stat-card">
                <h3>400 Mbps</h3>
                <p>Connexion ultra-rapide et stable</p>
              </div>
              <div className="stat-card">
                <h3>24/7</h3>
                <p>Accès intelligent via smartphone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title reveal">
            <div className="badge">Apprentissage & Croissance</div>
            <h2>Développez vos compétences.</h2>
            <p>Nos programmes et ateliers sont conçus pour les entrepreneurs qui veulent rester à l'avant-garde.</p>
          </div>

          <div className="grid">
            {/* Ateliers IA */}
            <div className="card reveal" style={{ borderColor: 'var(--accent-color)', background: 'rgba(0, 210, 255, 0.05)' }}>
              <div className="badge" style={{ background: 'var(--accent-color)', color: 'white' }}>Nouveau</div>
              <h3>Maîtriser l'IA</h3>
              <div className="price">99$<span> / session</span></div>
              <ul>
                <li>Atelier pratique 3h</li>
                <li>Claude, ChatGPT & Automatisation</li>
                <li>Cas d'usage concrets</li>
                <li>Accès au labo inclus</li>
              </ul>
              <a href="#contact" className="card-btn primary">S'inscrire</a>
            </div>

            {/* Accélérateur Coaching */}
            <div className="card reveal">
              <div className="badge">Stratégie</div>
              <h3>L'Accélérateur</h3>
              <div className="price">450$<span> / mois</span></div>
              <ul>
                <li>Accompagnement mensuel</li>
                <li>Prêt pour subventions (Prov./Féd.)</li>
                <li>Coaching plan d'affaires</li>
                <li>Mise en réseau SADC</li>
              </ul>
              <a href="#contact" className="card-btn">Postuler</a>
            </div>

            {/* Formation sur mesure */}
            <div className="card reveal">
              <div className="badge">Entreprises</div>
              <h3>Formation sur mesure</h3>
              <div className="price">Sur devis</div>
              <ul>
                <li>Audit de vos besoins IA</li>
                <li>Aide aux subventions de formation</li>
                <li>Outils collaboratifs Pro</li>
                <li>Formation en groupe (8 pers.)</li>
              </ul>
              <a href="#contact" className="card-btn">Nous contacter</a>
            </div>

            {/* Espace Coworking (En retrait) */}
            <div className="card reveal">
              <div className="badge">Bureau</div>
              <h3>Espace Coworking</h3>
              <div className="price">25$<span> / jour</span></div>
              <ul>
                <li>Poste de travail flexible</li>
                <li>Connexion 400 Mbps</li>
                <li>Café & Communauté</li>
                <li>Idéal pour formation autonome</li>
              </ul>
              <a href="#contact" className="card-btn">Réserver un poste</a>
            </div>
          </div>
        </div>
      </section>

      {/* Subventions & Financement Section */}
      <section id="financement" className="grants reveal">
        <div className="container">
          <div className="glass-panel funding-panel">
            <div className="funding-content">
              <div className="badge" style={{ background: 'white', color: 'var(--accent-secondary)' }}>Expertise Financement</div>
              <h3>Optimisez vos projets avec les subventions.</h3>
              <p>Naviguer dans les programmes provinciaux (Investissement Québec) et fédéraux (PAC) peut être complexe. Nous vous accompagnons pour maximiser vos chances d'obtenir du financement.</p>
              <ul className="funding-list">
                <li><span>•</span> Montage de dossiers de subvention</li>
                <li><span>•</span> Accompagnement volet numérique IA</li>
                <li><span>•</span> Liaison avec le CDSTP et partenaires régionaux</li>
              </ul>
            </div>
            <div className="funding-cta">
              <a href="#contact" className="cta-button">Consulter un expert</a>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Office Option */}

      {/* Events & Workshops Section */}
      <section id="evenements" className="events reveal">
        <div className="container">
          <div className="section-title">
            <div className="badge">Agenda 2026</div>
            <h2>Événements & Ateliers.</h2>
            <p>Rejoignez-nous pour des sessions de découverte et de réseautage.</p>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">MAR <span>15</span></div>
              <div className="event-info">
                <h4>Grand Lancement - Portes Ouvertes</h4>
                <p>Découvrez nos locaux et testez nos stations IA gratuitement.</p>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">AVR <span>02</span></div>
              <div className="event-info">
                <h4>L'IA pour les PME du Kamouraska</h4>
                <p>Comment automatiser vos tâches quotidiennes avec ChatGPT.</p>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">MAI <span>20</span></div>
              <div className="event-info">
                <h4>Atelier Subventions & Financement</h4>
                <p>En collaboration avec le CDSTP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners reveal">
        <div className="container">
          <div className="partners-wrap">
            <p className="partners-title">Impact Local & Partenariats</p>
            <div className="partners-logos" style={{ opacity: 1 }}>
              <div className="partner-logo">CDSTP <span>St-Pacôme</span></div>
              <div className="partner-logo">Municipalité <span>St-Pacôme</span></div>
              <div className="partner-logo">Le <span>Pacômien</span></div>
              <div className="partner-logo">Gaston <span>Dubé</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Revitalization Section */}
      <section className="revitalization reveal">
        <div className="container">
          <div className="grid" style={{ alignItems: 'center' }}>
            <div className="revital-visual">
              <div className="visual-circle">
                <span className="icon">🏛️</span>
              </div>
            </div>
            <div>
              <div className="badge">Rayonnement</div>
              <h2>Revitaliser Saint-Pacôme par le savoir.</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                En lien avec la mission du CDSTP, le Centre d'Affaires contribue à la force économique de notre village. Nous soutenons la mode durable via la formation numérique pour la Friperie et aidons les commerçants locaux à briller sur le web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq reveal">
        <div className="container">
          <div className="section-title">
            <h2>Des questions ?</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Dois-je être un expert en tech ?</h4>
              <p>Absolument pas. Le Centre d'Affaires est fait pour vous accompagner, peu importe votre niveau actuel.</p>
            </div>
            <div className="faq-item">
              <h4>Comment fonctionne l'aide aux subventions ?</h4>
              <p>Nous analysons vos projets et nous vous guidons vers les bons programmes provinciaux et fédéraux, en préparant les documents techniques avec vous.</p>
            </div>
            <div className="faq-item">
              <h4>Puis-je louer la salle pour un événement privé ?</h4>
              <p>Oui, notre salle de conseil est disponible à l'heure pour vos formations ou vos rencontres clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Location */}
      <section id="vision" className="vision">
        <div className="container">
          <div className="grid" style={{ alignItems: 'center' }}>
            <div className="reveal">
              <div className="badge">Vision Locale</div>
              <h2>Le trait d'union du Kamouraska.</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Situé à Saint-Pacôme, village-relais gastronomique et culturel, le Centre d'Affaires est le point de rencontre idéal entre La Pocatière et Saint-Pascal.
              </p>
              <ul className="vision-list">
                <li><span>Vendredi Portes Ouvertes:</span> Gratuit une fois par mois pour tous.</li>
                <li><span>Partenariats Locaux:</span> Ateliers et formations en collaboration avec le CDSTP.</li>
                <li><span>Technologie:</span> Postes IA haute performance (Claude, ChatGPT Pro, Google Workspace).</li>
              </ul>
            </div>
            <div className="reveal vision-image">
              <img src="/images/hub_interior.png" alt="Espace Centre d'Affaires" style={{ width: '100%', borderRadius: '30px', boxShadow: 'var(--shadow)' }} />
              <div className="image-overlay-badge">Innovation Rurale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="contact">
        <div className="container">
          <div className="footer-wrap">
            <div className="footer-info">
              <div className="logo">Centre d'Affaires <span>St-Pacôme</span></div>
              <p>Bâtir l'avenir de l'entrepreneuriat rural.</p>
              <div className="socials">
                {/* Icons would go here */}
                <span>Facebook</span>
                <span>LinkedIn</span>
              </div>
            </div>
            <div className="footer-form">
              <h3>Restez informé</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Votre email" />
                <button type="submit" className="cta-button">S'abonner</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Centre d'Affaires Saint-Pacôme. Propulsé par l'innovation locale.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
