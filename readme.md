# Démo Route privée sur ReactJS

## Description

Exemple de mise en place de routes privées dans une application ReactJS.

<br>

## Technologies utilisées
- Typescript
- ReactJS
- ViteJS
- MaterialUI

librairie
- React-router-dom: Gestion des routes dans l'application   

<br>

## Installation

1. cloner le *repository*
```bash
   git clone git@github.com:nicogau/test-react-private-route.git
```
2. installer les dépendances du projet
```bash
    cd test-react-private-route
    yarn install
```
3. démarrrer le serveur de développement 

```bash
    yarn dev
```
puis ouvrir dans un navigateur l'url ***localhost:5173***

</br>

## Utilisation
le composant `<PrivateRoute/>` peut être utilisé de deux manières: 
1. **Le composant rendu est un composant enfant de** `<PrivateRoute/>`
```jsx
    <Route path="dashboard" element={ 
        <PrivateRoute 
            isAuthenticated={user.loggedin}
            redirectRoute="/"
        >
            <DashBoard />
        </PrivateRoute>
    } 
    />
```
en cas d'echec d'authentification, l'utilisateur sera redirigé vers **/**  


2. **En utilisant un layout et des routes imbriquées**
```jsx
    <Route element={
        <PrivateRoute 
            isAuthenticated={user.loggedin} 
            hasRole={user.role} 
            allowedRoles={["admin"]}  
            redirectRoute="/"
        />}
    >
        <Route path="analytics" element={<Analytics />} />
        <Route path="admin" element= {<Admin/>} />
    </Route>
```
dans cet exemple ***/analytics*** et ***/admin*** seront accessibles uniquement si:
1. l' utilisateur est authentifié. (**isAuthenticated** est égal à  *true*)
2. l'utilisateur est autorisé, si il possède le rôle *admin*. (**hasRole**="admin") 

<br>

## Divers
1. gestion de l'utilisateur:  
**UserContext**: état global pour gérer les infos d'un utilisateur.  
**UserProvider** : Provider qui rend accessible les infos d'un utilisateur.

les infos utilisateurs sont accessibles depuis n' importe quel composant en utilisant le *custom hook* ***useUser()***

2. validation de l'authentification et de l'authorisation dans `<PrivateRoute/>`:  

*custom hook*: **useIsUserAllowed**
```ts
/**
 * check if a user is authenticated and if his role is allowed
 *
 * @param {boolean} isUserAuthenticated - is the user authenticated
 * @param {string} [userRole] - which role has the user
 * @param {string[]} [allowedRoles] - array of allowed roles
 * @returns {boolean} if the user is allowed return true else false
 */
const useIsUserAllowed = (isUserAuthenticated: boolean, userRole?: string, allowedRoles?: string[]): boolean => {

```