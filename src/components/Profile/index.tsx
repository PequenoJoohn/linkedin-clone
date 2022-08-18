import Buttons from "../Buttons";
import Company from "../Company";

import { Container } from "./styles";

interface ProfileProps {
  fullName: string;
  role: string;
  about: string;
  location: string;
  followers: number;
  following: number;
  company?: [CompanyProps];
}

interface CompanyProps {
  image: string;
  name: string;
}

const Profile = ({
  fullName,
  role,
  about,
  location,
  followers,
  following,
  company,
}: ProfileProps) => {
  return (
    <Container>
      <img
        className="background"
        src="https://w.wallhaven.cc/full/42/wallhaven-42m759.jpg"
        alt=""
      />
      <div className="container">
        <div className="profile">
          <img
            className="profile-image"
            src="https://github.com/pequenojoohn.png"
            alt=""
          />

          <div className="profile-wrapper">
            <div className="profile-wrapper-info">
              <h2 className="profile-wrapper-info-name">{fullName}</h2>
              <p className="profile-wrapper-info-role">{role}</p>
              <p className="profile-wrapper-info-about">{about}</p>
              <div className="profile-wrapper-info-location">
                <p>{location} </p>
                <span>.</span>
                <p>informações de contato</p>
              </div>

              <div className="profile-wrapper-info-social">
                <p>{followers} seguidores</p>
                <span></span>
                <p>
                  {following >= 500
                    ? "+ de 500 conexões"
                    : `${following} conexões`}
                </p>
              </div>
              <div className="profile-wrapper-info-buttons">
                <Buttons label={"Mensagem"} type="primary" />
                <Buttons label={"Mais"} type="secondary" />
              </div>
            </div>
            <div className="profile-wrapper-company">
              {company?.map((comp) => (
                <Company image={comp.image} name={comp.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
