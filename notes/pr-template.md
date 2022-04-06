# Pull Request Template


For å gjøre pull request mer strømmlinjeformede og bruke den fantastiske teknologien checlister er det nyttig å bruke templates.


<a href="javascript:(()=>{window.location.href=window.location.href+'&template=frontend.md'})();" icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADcElEQVRYha1XbXLaSBB9PZJd+Fd0g4wX4pJTgWhPsPgE4QZLTrDsCQInWOcEsW9ATmB8gmDYWmsroiKfYOFXKCLp7Q8kAmjEl3lV+sG06H7TPd1vJNgD5YtqAwrvBNAQcQB4qakPckwgFKIb/Dv8vKtP2faCdl1t4eQDRBoCOLs4JTAG2Y2n1p9h2B8fTKDi1toU/LFrYBMRIa4Df9DZi4DWnmOfJXf4meLnoh99V1embOQI6FevPcu27w7ddREIjOMougq//tMvJKC151hnybdjB18h8V2dL2dCLQe3z5LVnZMPJG8JPB0Q7InkLcj7bE2ArLQLLAjYpaSFtZoTuB75w+bocaBJvl8hQt4vPyQm82VMSL4fPQ70yB82meB6jZtXcWvtJVJpq8npl1zqmVwF/t+97KfWnoOTmV6v48LuuhrT0ng5xfrVa8+27S9rG1uUwgYACyftXeqeOjYGB4DQ98PcopWYTr5jleJrAM20BNIwOSREbyO1DVZyYm5lkXcAoMoX1YYIXuSCE5N4anWfSyCeWT3TIRbAKV9UGwoKxt0DbG0bo7sgDPtjkG2j0ZK6EsCY5mPsPsPIH96Y1oX0FAyHj8TkGLtfc3qfWxN5oSDy1vD6f0cNXgxPmVZFzGV5DijmjlJFY1Zr76h6IMDLHCngSQmZHx4ArFJc0B37o3xRNfoSMlQUMU42AX4/FgFRaJnWKdJXiNkzGSFS/+WyZvzjPii71SZEfjMaY/ZUPLN6mZKtQwF/Vdzah0ODV9xaW0Q+mWwkJvHM6knK8kZE5iknOkzYF4V21qIkQhF2QXQDf5jv55Wgb+oJ1VsRtDZ1E4GPo8dBayHHtpx+Sw3jOIqu8OM0tEtxLzcnyIfAHxoFpnxZ7QrmIrMNEWfnoe+HCkhllOgAqVTa9h1KUyfCj8Z6eZjAPNcBxFFcaFvdBDqZdK/cCStutf8z7bwd+cOm1p6T3pZAMCya6wsflzVuDr6awfyltJSEmTxHUfRr0e3nEAJziVd6WWfM13LL7mUkSN4IZDGsNn1kbCJAYhLHUX3jtXxBQnuO8QACCB4Hm7+mTATIh2hq1U0KaxSjMOyPA3/oZQfzWSA6gT/0iuTdSCBD4A/aEWfnBD7Or9vmgbUSL32P5G3E2XngD3brjG3Q2nO0626Vae26eh8l/R8WVb69M+2tBQAAAABJRU5ErkJggg=="> PRT Frontend </a>

`<a href="javascript:(()=>{window.location.href=window.location.href+'&template={frontend}.md'})();" icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADcElEQVRYha1XbXLaSBB9PZJd+Fd0g4wX4pJTgWhPsPgE4QZLTrDsCQInWOcEsW9ATmB8gmDYWmsroiKfYOFXKCLp7Q8kAmjEl3lV+sG06H7TPd1vJNgD5YtqAwrvBNAQcQB4qakPckwgFKIb/Dv8vKtP2faCdl1t4eQDRBoCOLs4JTAG2Y2n1p9h2B8fTKDi1toU/LFrYBMRIa4Df9DZi4DWnmOfJXf4meLnoh99V1embOQI6FevPcu27w7ddREIjOMougq//tMvJKC151hnybdjB18h8V2dL2dCLQe3z5LVnZMPJG8JPB0Q7InkLcj7bE2ArLQLLAjYpaSFtZoTuB75w+bocaBJvl8hQt4vPyQm82VMSL4fPQ70yB82meB6jZtXcWvtJVJpq8npl1zqmVwF/t+97KfWnoOTmV6v48LuuhrT0ng5xfrVa8+27S9rG1uUwgYACyftXeqeOjYGB4DQ98PcopWYTr5jleJrAM20BNIwOSREbyO1DVZyYm5lkXcAoMoX1YYIXuSCE5N4anWfSyCeWT3TIRbAKV9UGwoKxt0DbG0bo7sgDPtjkG2j0ZK6EsCY5mPsPsPIH96Y1oX0FAyHj8TkGLtfc3qfWxN5oSDy1vD6f0cNXgxPmVZFzGV5DijmjlJFY1Zr76h6IMDLHCngSQmZHx4ArFJc0B37o3xRNfoSMlQUMU42AX4/FgFRaJnWKdJXiNkzGSFS/+WyZvzjPii71SZEfjMaY/ZUPLN6mZKtQwF/Vdzah0ODV9xaW0Q+mWwkJvHM6knK8kZE5iknOkzYF4V21qIkQhF2QXQDf5jv55Wgb+oJ1VsRtDZ1E4GPo8dBayHHtpx+Sw3jOIqu8OM0tEtxLzcnyIfAHxoFpnxZ7QrmIrMNEWfnoe+HCkhllOgAqVTa9h1KUyfCj8Z6eZjAPNcBxFFcaFvdBDqZdK/cCStutf8z7bwd+cOm1p6T3pZAMCya6wsflzVuDr6awfyltJSEmTxHUfRr0e3nEAJziVd6WWfM13LL7mUkSN4IZDGsNn1kbCJAYhLHUX3jtXxBQnuO8QACCB4Hm7+mTATIh2hq1U0KaxSjMOyPA3/oZQfzWSA6gT/0iuTdSCBD4A/aEWfnBD7Or9vmgbUSL32P5G3E2XngD3brjG3Q2nO0626Vae26eh8l/R8WVb69M+2tBQAAAABJRU5ErkJggg=="> {PRT Frontend{} </a>`

kan ha flere templates

Forslag til template

`repo/.github/PULL_REQUEST_TEMPLATE/frontend.md`

```md
### Lenke til issue 
> Feks: [beskrivelse](https://example.com) 

### Beskrivelse av oppgave
> en kortere beskrivelse og scoping av oppgaven 

### Bilde av endring

### Hvordan teste
1.


### Checklist:
  - [ ] Finn ut hva som skal gjøres og HVORFOR det skal gjøres. Dra med designer her hvis det trengs.
  - [ ] Avklar med Design hvordan oppgaven skal løses hvis nødvendig
  - [ ] Hva blir påvirket av denne endringen
  - [ ] Deploy og test i Test
  - [ ] Test selv
  - [ ] Sjekk at det oppleves bra på stor skjerm, laptop og mobil - bytt ut med de viktigste skjermstårelsene dere leverer for( dere bør samle inn data om dette)
  - [ ] Få UXer til å teste
  - [ ] Få review på koden med testing i testmiljø
  - [ ] Få prosjekteier til å teste
  - [ ] Få bruker som meldte inn sak til å teste
  - [ ] Oppdater bruker når ting er i prod
  ```