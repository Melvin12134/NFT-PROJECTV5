import './Post.css';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
export const Post = () =>  {

    return (

        <div className="postflexcontainer">


            <div className="postpagecontainer">
                <div className="nftflexcontainer">
                        <div className="nftcontainer">
                                <img src="/Images/cryptopunk.png"></img>
                        </div>
                                <div className="nftcontentcontainer">
                                    <div className="nftinfocontainer">
                                        <h2 className="likenumber">0</h2>
                                        <AiOutlineHeart></AiOutlineHeart> 
                                        <h1>NFTNAME</h1>
                                    </div>
                                                <div className="nftcontentseperator"></div>
                                        <div className="nftownercontainer">
                                            <div className="postprofilepicturecontainer"></div>
                                            <h1>UserName</h1>
                                        </div>
                                        <h1 className="nftdescriptioncontainer">
                                        ua08sduoiasujdioasjdoiasujiodhuasoidfhaoijiaosdhjoiahjsdoiahsdoihasoidhasoidhaoisdhaoishdioahsdioahsdioahsdiohaoisdhaiosdhaoidshaishdioahdohasdiohaisodhahdiaisdhioahsdioashdiashdiahsdioasdhaioshdaiodhaisdhoiahsdoiadshiashdoihasdhoishasdiohaiosdhaiosdhoiaishdiahsdioahdsoisahdaoisshdaioshdaihsdoiahsdihasdiohaoihshoidhaiosdhsaidohoaisua08sduoiasujdioasjdoiasujiodhuasoidfhaoijiaosdhjoiahjsdoiahsdoihasoidhasoidhaoisdhaoishdioahsdioahsdioahsdiohaoisdhaiosdhaoidshaishdioahdohasdiohaisodhahdiaisdhioahsdioashdiashdiahsdioasdhaioshdaiodhaisdhoiahsdoiadshiashdoihasdhoishasdiohaiosdhaiosdhoiaishdiahsdioahdsoisahdaoisshdaioshdaihsdoiahsdihasdiohaoihshoidhaiosdhsaidohoais
                                        ua08sduoiasujdioasjdoiasujiodhuasoidfhaoijiaosdhjoiahjsdoiahsdoihasoidhasoidhaoisdhaoishdioahsdioahsdioahsdiohaoisdhaiosdhaoidshaishdioahdohasdiohaisodhahdiaisdhioahsdioashdiashdiahsdioasdhaioshdaiodhaisdhoiahsdoiadshiashdoihasdhoishasdiohaiosdhaiosdhoiaishdiahsdioahdsoisahdaoisshdaioshdaihsdoiahsdihasdiohaoihshoidhaiosdhsaidohoais


                                        </h1>
                                </div>
                    </div>



                        <div className="cmtcontainer">
                                        <div className="nftstatcontainer">
                                            <h3>0</h3> <FaRegComment></FaRegComment>
                                            <h3>0</h3> <AiOutlineEye></AiOutlineEye>
                                            
                                        </div>
                                    <div className="commentcontainer">
                                        <div className="submitcmtcontainer">


                                        <div className="cmtprofilepiccontainer">

                                                <img src="/Images/cryptopunk.png"></img>

                                        </div>
                                                
                                                <input type="text" placeholder="Add a comment"></input>
                                        

                                                <button>Comment</button>
                                                


                                            
                                        </div>
                                        <div className="nftcontentseperator"></div>
                                        <div className="commentsection">
                                        
                                        <div className="dummy"></div>

                                        </div>

                                    </div>

                                </div>
                
                </div>
    </div>



    )
}