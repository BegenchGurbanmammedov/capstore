import Directory from '../../components/directory/Directory'
function Home() {
  const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
]
  return (
  <Directory categories={categories}/>
  );
}

export default Home;

// const logGoogleUser=async ()=>{
//    const {user}=await signInWithGooglePopup();
//    const userDocRef = await createUserDocumentAuth(user)
//  }

{
  /*<div className="flex flex-col justify-between h-screen">
            <button onClick={logGoogleUser}>Sign in </button>

      </div>*/
}
//bootrstrap font-awesome
