
import './App.css';
import Message from './Message';

function App() {
  return 
    //<div className="App">
     {/* <Message place="Earth" at1="value1"></Message>
     <Message place="Moon"></Message>
     <Message place="Mars"></Message>
     <Message place="Jupiter"></Message> */}
     //</div>
<section class="pricing py-5">
    <div class="container">
      <div class="row">

     <Message plan="Free" price="$0/month" user="Single User" stroage="5GB Sgtorage" pubproject="Unlimited Public Project" access="Community Access" priproject="Unlimited Private Projects" phone="Dedicated Phone Support" subdomain="Free Subdomain" reports="Monthly Status Report" ></Message>
     <Message plan="Plus" price="$9/month" user="5 User" stroage="50GB Sgtorage" pubproject="Unlimited Public Project" access="Community Access" priproject="Unlimited Private Projects" phone="Dedicated Phone Support" subdomain="Free Subdomain" reports="Monthly Status Report" ></Message>
     <Message plan="PRO" price="$49/month" user="Unlimited User" stroage="150GB Sgtorage" pubproject="Unlimited Public Project" access="Community Access" priproject="Unlimited Private Projects" phone="Dedicated Phone Support" subdomain="Unlimited Free Subdomain" reports="Monthly Status Report"></Message>
     
    

    </div>
  </div>
</section>
    
  
}

export default App;
