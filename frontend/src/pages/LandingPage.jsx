import {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ArrowRight, LayoutTemplate, Menu, X, Zap, Download} from 'lucide-react';
import {landingPageStyles} from '../assets/dummystyle'
import {UserContext} from '../context/UserContext';
import { ProfileInfoCard } from '../components/Cards';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Modal from '../components/Modal';


const LandingPage = () => {

    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    const [openAuthModel, setOpenAuthModel] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState("login")

    const handleCTA =() =>{
        if(!user){
            setOpenAuthModel(true)
        }
        else{
            navigate('/dashboard')
        }
    }

    return (
        <div className={landingPageStyles.container}>
            <header className={landingPageStyles.header}>
                <div className={landingPageStyles.headerContainer}>
                    <div className={landingPageStyles.logoContainer}>
                        <div className={landingPageStyles.logoIcon}>
                            <LayoutTemplate className={landingPageStyles.logoIconInner}/>
                        </div>
                        <span className={landingPageStyles.logoText}>
                            ResumeCraft
                        </span>
                    </div>

                    <button className={landingPageStyles.mobileMenuButton}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? 
                            <X size={24} className={landingPageStyles.mobileMenuIcon} /> :
                            <Menu size={24} className={landingPageStyles.mobileMenuIcon} />}
                    </button>

                    <div className='hidden md:flex items-center'>
                        {user ?(
                            <ProfileInfoCard/>
                        ) : (
                            <button className={landingPageStyles.desktopAuthButton} onClick={()=>setOpenAuthModel(true)}>
                                <div className={landingPageStyles.desktopAuthButtonOverlay}></div>
                                <span className={landingPageStyles.desktopAuthButtonText}>Get Started</span>
                            </button>
                        )}
                    </div>
                </div>

                {mobileMenuOpen &&(
                    <div className={landingPageStyles.mobileMenu}>
                        <div className={landingPageStyles.mobileMenuContainer}>
                            {user ? (
                                <div className={landingPageStyles.mobileUserInfo}>
                                    <div className={landingPageStyles.mobileUserWelcome}>
                                        Welcome Back
                                    </div>
                                    <button className={landingPageStyles.mobileDashboardButton}
                                        onClick={()=>{
                                            navigate('/dashboard')
                                            setMobileMenuOpen(false)
                                        }}>
                                            Go to Dashboard
                                    </button>
                                </div>
                            ): (
                                <button className={landingPageStyles.mobileAuthButton}
                                onClick={()=>{
                                    setOpenAuthModel(true)
                                    setMobileMenuOpen(false)
                                }}>
                                    Get Started
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </header>


            <main className={landingPageStyles.main}>
                <section className={landingPageStyles.heroSection}>
                    <div className={landingPageStyles.heroGrid}>
                        <div className={landingPageStyles.heroLeft}>
                            <div className={landingPageStyles.tagline}>
                                Professional Resume Builder
                            </div>

                            <h1 className={landingPageStyles.heading}>
                                <span className={landingPageStyles.headingText}>Design</span>
                                <span className={landingPageStyles.headingGradient}>Standout</span>
                                <span className={landingPageStyles.headingText}>Resumes</span>
                            </h1>

                            <p className={landingPageStyles.description}>
                                Create ATS-friendly, job-winning resumes with our resume builder. 
                                Choose from thousands of templates, customize your resume, and get hired.
                            </p>


                            <div className={landingPageStyles.ctaButtons}>
                                <button className={landingPageStyles.primaryButton}
                                onClick={handleCTA}>
                                    <div className={landingPageStyles.primaryButtonOverlay}>
                                    </div>
                                    <span className={landingPageStyles.primaryButtonContent}>
                                        Start Building
                                        <ArrowRight className={landingPageStyles.primaryButtonIcon} size={18}/>
                                    </span>
                                </button>

                                <button className={landingPageStyles.secondaryButton} onClick={handleCTA}>
                                    View Templates
                                </button>
                            </div>


                            <div className={landingPageStyles.statsContainer}>
                                {[
                                    { value: '20K+', label: 'Resumes Created', gradient: 'from-violet-600 to-fuchsia-600' },
                                    { value: '4.5★', label: 'User Rating', gradient: 'from-orange-500 to-red-500' },
                                    { value: '5 Min', label: 'Build Time', gradient: 'from-emerald-500 to-teal-500' }
                                ].map((stat, idx) =>(
                                    <div className={landingPageStyles.statItem} key={idx}>
                                        <div className={`${landingPageStyles.statNumber} ${stat.gradient}`}>
                                            {stat.value}
                                        </div>
                                        <div className={landingPageStyles.statLabel}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>




                        <div className={landingPageStyles.heroIllustration}>
                            <div className={landingPageStyles.heroIllustrationBg}></div>
                            <div className={landingPageStyles.heroIllustrationContainer}>
                                <svg
                                    viewBox="0 0 400 500"
                                    className={landingPageStyles.svgContainer}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Background */}
                                    <defs>
                                        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8b5cf6" />
                                            <stop offset="100%" stopColor="#d946ef" />
                                        </linearGradient>
                                        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#ffffff" />
                                            <stop offset="100%" stopColor="#f8fafc" />
                                        </linearGradient>
                                    </defs>

                                    {/* SVG elements */}
                                    <rect x="40" y="20" width="360" height="480" rx="30" fill="#f5f5f5" stroke="#a1a1aa" strokeWidth="3" />
                                    {/* Circle representing picture inside resume */}
                                    <circle cx="110" cy="110" r="30" fill="red" />
                                    <rect x="170" y="110" width="100" height="10" rx="5" className={landingPageStyles.svgRectPrimaryAlt} />
                                    <rect x="170" y="130" width="90" height="8" rx="4" className={landingPageStyles.svgRectSecondaryAlt} />
                                    <rect x="80" y="160" width="240" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="175" width="180" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="190" width="220" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="205" width="200" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="220" width="70" height="8" rx="4" className={landingPageStyles.svgRectPrimaryAlt} />
                                    <rect x="80" y="240" width="50" height="18" rx="9" className={landingPageStyles.svgRectSkillAlt} />
                                    <rect x="130" y="240" width="60" height="18" rx="9" className={landingPageStyles.svgRectSkillAlt} />
                                    <rect x="190" y="240" width="55" height="18" rx="9" className={landingPageStyles.svgRectSkillAlt} />
                                    <rect x="80" y="280" width="90" height="8" rx="4" className={landingPageStyles.svgRectSecondaryAlt} />
                                    <rect x="80" y="300" width="190" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="315" width="160" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="330" width="210" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="345" width="200" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="360" width="190" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="375" width="180" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="390" width="170" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    <rect x="80" y="405" width="160" height="5" rx="3" className={landingPageStyles.svgRectLightAlt} />
                                    
                                    

                                    {/* Animated elements */}
                                    {/* Move animated circle outside the big rectangle */}
                                    {/* Remove this circle from inside */}
                                    <rect x="40" y="310" width="14" height="14" rx="7" className={landingPageStyles.svgAnimatedRectAlt}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="scale"
                                            values="1; 1.2; 1"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                    <polygon points="350,210 365,230 335,230" className={landingPageStyles.svgAnimatedPolygonAlt}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="0 350 220; 360 350 220; 0 350 220"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </polygon>
                                    {/* New animated elements outside the big rectangle */}
                                    <circle cx="20" cy="50" r="12" className={landingPageStyles.svgAnimatedCircleAlt}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0,0; 0,15; 0,0"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <rect x="380" y="450" width="16" height="16" rx="8" className={landingPageStyles.svgAnimatedRectAlt}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0,0; -10,0; 0,0"
                                            dur="4s"
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                    <polygon points="10,400 25,420 0,420" className={landingPageStyles.svgAnimatedPolygonAlt}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="0 10 410; 360 10 410; 0 10 410"
                                            dur="6s"
                                            repeatCount="indefinite"
                                        />
                                    </polygon>
                                    {/* Additional animated elements */}
                                    <circle cx="360" cy="50" r="10" className={landingPageStyles.svgAnimatedCircleAlt}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0,0; 0,20; 0,0"
                                            dur="4s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <rect x="10" y="460" width="20" height="20" rx="10" className={landingPageStyles.svgAnimatedRectAlt}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0,0; 15,0; 0,0"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                    <polygon points="380,400 395,420 365,420" className={landingPageStyles.svgAnimatedPolygonAlt}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="0 380 410; 360 380 410; 0 380 410"
                                            dur="7s"
                                            repeatCount="indefinite"
                                        />
                                    </polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>


                <section className={landingPageStyles.featuresSection}>
                    <div className={landingPageStyles.featuresContainer}>
                        <div className={landingPageStyles.featuresHeader}>
                            <h2 className={landingPageStyles.featuresTitle}>
                                Why Choose <span className={landingPageStyles.featuresTitleGradient}>
                                    ResumeCraft?
                                </span>
                            </h2>
                            <p className={landingPageStyles.featuresDescription}>
                                Everything you need to create a professional resume, all in one place.
                            </p>
                        </div>


                        <div className={landingPageStyles.featuresGrid}>
                            {[
                                {
                                    icon: <Zap className={landingPageStyles.featureIcon} />,
                                    title: "Build in Minutes",
                                    description: "Create professional resumes in under 5 minutes with our streamlined process",
                                    gradient: landingPageStyles.featureIconViolet,
                                    bg: landingPageStyles.featureCardViolet
                                },
                                {
                                    icon: <LayoutTemplate className={landingPageStyles.featureIcon} />,
                                    title: "Expert-Designed Templates",
                                    description: "Choose from dozens of recruiter-approved, industry-specific templates",
                                    gradient: landingPageStyles.featureIconFuchsia,
                                    bg: landingPageStyles.featureCardFuchsia
                                },
                                {
                                    icon: <Download className={landingPageStyles.featureIcon} />,
                                    title: "One-Click Export",
                                    description: "Download high-quality PDFs instantly with perfect formatting",
                                    gradient: landingPageStyles.featureIconOrange,
                                    bg: landingPageStyles.featureCardOrange
                                }
                            ].map((feature, index)=>(
                                <div key={index} className={landingPageStyles.featureCard}>
                                    <div className={landingPageStyles.featureCardHover}></div>
                                    <div className={`${landingPageStyles.featureCardContent} ${feature.bg}`}>
                                        <div className={`${landingPageStyles.featureIconContainer} ${feature.gradient}`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className={landingPageStyles.featureTitle}>
                                            {feature.title}
                                        </h3>
                                        <p className={landingPageStyles.featureDescription}>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className={landingPageStyles.ctaSection}>
                    <div className={landingPageStyles.ctaContainer}>
                        <div className={landingPageStyles.ctaCard}>
                            <div className={landingPageStyles.ctaCardBg}></div>
                                <div className={landingPageStyles.ctaCardContent}>
                                    <h2 className={landingPageStyles.ctaTitle}>
                                        Ready to create your <span className={landingPageStyles.ctaTitleGradient}>Standout Resume?</span>
                                    </h2>

                                    <p className={landingPageStyles.ctaDescription}>
                                        Get started with our easy-to-use resume builder and create a professional resume in under 5 minutes
                                    </p>
                                    <button className={landingPageStyles.ctaButton} onClick={handleCTA}>
                                        <div className={landingPageStyles.ctaButtonOverlay}></div>
                                        <span className={landingPageStyles.ctaButtonText}>Start Building Now</span>
                                    </button>
                                </div>
                        </div>
                    </div>
                </section>
            </main>



            <footer className={landingPageStyles.footer}>
                <div className={landingPageStyles.footerContainer}>
                    <p className={landingPageStyles.footerText}>
                        Crafted with <span className={landingPageStyles.footerHeart}>❤️</span> by{' '}
                        <a href="" target="_blank" className={landingPageStyles.footerLink}>Meriyl</a>
                    </p>
                </div>
            </footer>



            <Modal isOpen={openAuthModel} onClose={() => {
                setOpenAuthModel(false)
                setCurrentPage("login")
            }} hideHeader>
                <div>
                    {currentPage ==="login" && <Login setCurrentPage={setCurrentPage} />}
                    {currentPage ==="signup" && <SignUp setCurrentPage={setCurrentPage} />}
                </div>
            </Modal>
        </div>
    )
}

export default LandingPage