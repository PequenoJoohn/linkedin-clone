import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "90rem",
          display: "flex",
          margin: "0 auto",
          flexDirection: "column",
        }}
      >
        <div>
          <Profile
            fullName="Jonathan Matos"
            role="Full Stack Developer na Hero99"
            about="Pro-ativo, fundador da comunidade LabZone, instrutor de programação, #frontend, #reactjs."
            location="Anápolis, Goiás, Brazil"
            followers={120}
            following={500}
            company={[
              {
                name: "Hero99",
                image:
                  "https://media-exp1.licdn.com/dms/image/C4D0BAQErqcJKapUclg/company-logo_100_100/0/1542644296340?e=1668643200&v=beta&t=7pYr-irn6K2ymKJzweWmvzVLeYnJYe0JgbyDAyPp7d8",
              },
            ]}
          />
        </div>
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
