let darkMode =true
 const buttonToggle = document.getElementById('toggle-mode')


 buttonToggle.addEventListener('click',(event)=>{
    document.documentElement.classList.toggle('light')
  
    //accessibility

    const mode = darkMode ? 'Light' : 'dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
   
 })



