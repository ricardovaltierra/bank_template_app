import styles from './style';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        'Hero Section'
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* As in Hero and Navbar, these are going to be components */}
        Stats
        Bussiness
        Billing
        CardDeal
        Testimonials
        Clients
        CTA
        Footer
      </div>
    </div>
  </div>
);

export default App;
