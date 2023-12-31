export default function Home() {
  return (
    <div>
      <div className="TeamPhoto">
        <img
          src="./assets/Team.jpeg"
          alt="Team Photo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(70%)',
          }}
        />
        <div className='TeamPhotoText'>
          <h1>Empowering Students</h1>
          <h1 className="SecondTeamText">Building Community</h1>
        </div>
      </div>

      
    </div>
  );
}
