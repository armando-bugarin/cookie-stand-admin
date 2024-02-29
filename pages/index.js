import { useState } from "react";

export default function Home() {

  function handleCreate() {
    alert(standInfo.location);
  }
  
  return (
    <div>
      <Header />
      <main className="p-10">
        <CookieForm onCreate={handleCreate} />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    
    <header className="bg-green-500 color">Cookie Stand</header>
  )
}

function CookieForm() {

  function handleSubmit(event) {
    event.preventDefault();
    props.onCreate();
  }
  
  return (
    <form className="flex-col w-2/3 gap-2 p-4 mx-auto bg-green-300 border-green-500 rounded-lg shadow-lg">
      <legend>Create Cookie Stand</legend>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" />
      </div>
      <div>
        <label htmlFor="minCustomersPerHour">Minimum Customers Per Hour</label>
        <input type="number" name="minCustomersPerHour" />
      </div>
      <div>
        <label htmlFor="maxCustomersPerHour">Maximum Customers Per Hour</label>
        <input type="number" name="maxCustomersPerHour" />
      </div>
      <div>
        <label htmlFor="avgCookiesPerSale">Average Cookies per Sale</label>
        <input type="number" name="avgCookiesPerSale" step="0.1" />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

function Footer() {
  return (
    <footer className="bg-green-500 color">&copy; 2023</footer>
  )
}
