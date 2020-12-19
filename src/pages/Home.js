import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Summary from '../components/Summary'

const Home = () => {

	return (

			<div class="container"> 
				 <header class="jumbotron my-4">
				    <h1 class="display-3">
					<Summary /></h1>
				</header>


				<div class="row text-center">
				<div class="container"> 
			      <h1>Tips Mencegah Penularan</h1>
			      </div>
			      <div class="col-lg-3 col-md-6 mb-4">
			        <div class="card h-100">
			          <img class="card-img-top" src="images/cuci tangan.png" alt="" />
			          <div class="card-body">
			            <h4 class="card-title">1. Cuci tangan</h4>
			            <p class="card-text">Selalu rajin mencuci tangan bila menyentuh benda saat berpergian keluar rumah</p>
			          </div>
			          <div class="card-footer">
			          </div>
			        </div>
			      </div>

			      <div class="col-lg-3 col-md-6 mb-4">
			        <div class="card h-100">
			          <img class="card-img-top" src="images/pakai masker.png" alt="" />
			          <div class="card-body">
			            <h4 class="card-title">2. Memakai Masker</h4>
			            <p class="card-text">Selalu menggunkan masker jika hendak berpergian keluar rumah dan mengganti masker secara berkala</p>
			          </div>
			          <div class="card-footer">
			          </div>
			        </div>
			      </div>

			      <div class="col-lg-3 col-md-6 mb-4">
			        <div class="card h-100">
			          <img class="card-img-top" src="images/jaga jarak.png" alt="" />
			          <div class="card-body">
			            <h4 class="card-title">3. Menjaga Jarak</h4>
			            <p class="card-text">Selalu menjaga jarak dengan minimal 2 meter dengan orang lain</p>
			          </div>
			          <div class="card-footer">
			          </div>
			        </div>
			      </div>

			      <div class="col-lg-3 col-md-6 mb-4">
			        <div class="card h-100">
			          <img class="card-img-top" src="images/antis.png" alt="" />
			          <div class="card-body">
			            <h4 class="card-title">4. Membawa Antiseptic</h4>
			            <p class="card-text">Selalu membawa Antiseptic dan menggunkannya jika menyentuh sesuatu</p>
			          </div>
			          <div class="card-footer">
			          </div>
			        </div>
			      </div>

			      <div class="col-lg-3 col-md-6 mb-4">
			        <div class="card h-100">
			          <img class="card-img-top" src="images/jaket.png" alt="" />
			          <div class="card-body">
			            <h4 class="card-title">5. Mengenakan Lengan Panjang</h4>
			            <p class="card-text">Mengenakan pakaian lengan Panjang atau jaket apabila hendak pergi keluar rumah sehingga nanti kulit tidak bersentuhan dengan orang lain</p>
			          </div>
			          <div class="card-footer">
			          </div>
			        </div>
			      </div>
			 </div>




			      <footer class="py-5 bg-dark">
				    <div class="container">
				      <p class="m-0 text-center text-white">Copyright &copy; Blueberry 2020</p>
			    	</div>
			  	</footer>

			 </div>
			 

			



	     

			            
			 
		

	)
}

export default Home
