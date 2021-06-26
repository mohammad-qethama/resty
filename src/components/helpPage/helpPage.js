const helpPage = (props)=>{
  return(
    <div>
    <h2>Resty help page</h2>
    <div className='homePage'>
      <h3>HomePage Help</h3>
    <ul>
      <li>submit your api URL to the form and choose the RESTfull method </li>
      <li> if you have <strong>Body</strong>  write it in JSON format in the lower text-box</li>
      <li>click on go! to show results  </li>
      <li>history of your successful runs will be saved and can be shown if you click show history </li>
      <li>you can click on the reruns list to repopulate the form with its url </li>
    </ul>
    </div>
    <div>
    <h3>History-Page Help</h3>

      <ul>
        <li>History of past successful rerun will be shown in the page </li>
        <li>by clicking on the rerun its self you can see the response of that bast rerun  </li>
        <li>the rerun will be shown in JSON Form at the Right of the page  </li>
        <li> a button above each rerun will redirect you to the home page and repopulate its form with that run url  </li>
      </ul>
    </div>
    </div>
  )
}

export default helpPage;