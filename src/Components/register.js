import React from 'react';

class register extends React.Component {
    render () {
        return(
<section id="cover" class="min-vh-100">
    <div class="container">
        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
           <div style= {{marginTop: 10}}>
            <h3 class="text-center">User Registration</h3>
            <br></br>
            <form onSubmit={this.onSubmit}>
            <div class="form-row">               
         <div class="form-group col-md-6">
          <input type="text" class="form-control" id="inputEmail4" placeholder="First Name"/>
                </div>
                <div class="form-group col-md-6">
          <input type="text" class="form-control" id="inputEmail4" placeholder="Last Name"/>
                </div>
          </div>
                <div className="form-group">
                    <input type="email" 
                          className="form-control"
                          placeholder="Your Email" 
                        //   value={this.state.person_name}
                        //   onChange={this.onChangePersonName}
                          />
                </div>
                <div className="form-group">
                    <input type="password" 
                           className="form-control"
                           placeholder="Password"
                        //    value={this.state.business_name}
                        //    onChange={this.onChangeBusinessName}
                           />
                </div>
                <div className="form-group">
                    <input type="password" 
                          className="form-control"
                          placeholder="Confirm Password"
                        //   value={this.state.business_nic_number}
                        //   onChange={this.onChangeNicNumber}
                          />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    </div>
   </div>
</section>
        );
    }
}
export default register;
