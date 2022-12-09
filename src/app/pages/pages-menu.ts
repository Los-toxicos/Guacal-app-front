import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Administrador',  
    icon: 'person', 
    group: true, 
  },
  {
    title: 'Operador de Aerolinea',   
    icon: 'person',   
    group: true,
  },
  {
    title: 'Usuario',    
    icon: 'person', 
    group: true, 
  },
  {
    title: 'Invitado',    
    icon: 'person',  
    group: true,
  },
  {
    title: 'Login',
    icon: 'log-in-outline',
    link: '/pages/seguridad/login',    
  },
  {
    title: 'Home',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },  
  {
    title: 'Aerolineas',
    icon: 'paper-plane-outline',    
    children:[
      {
        title: 'Crear',
        link: '/pages/aerolineas/crear'
      },
      {
        title: 'Listar',
        link: '/pages/aerolineas/listar'
      }
    ]
  },  
  {
    title: 'Guacales',
    icon: 'briefcase-outline',
    children:[
      {
        title: 'Crear',
        link: '/pages/guacales/crear'
      },
      {
        title: 'Listar',
        link: '/pages/guacales/listar'
      }
    ]    
  },
  {
    title: 'Mascotas',
    icon: 'arrow-circle-up-outline',    
    children:[
      {
        title: 'Crear',
        link: '/pages/mascotas/crear'
      },
      {
        title: 'Listar',
        link: '/pages/mascotas/listar'
      }
    ]
  },  
  {
    title: 'Perfiles',
    icon: 'person-done-outline',
    children:[
      {
        title: 'Crear',
        link: '/pages/perfiles/crear'
      },
      {
        title: 'Listar',
        link: '/pages/perfiles/listar'
      }
    ]    
  },
  {
    title: 'Permisos',
    icon: 'shield-off-outline',    
    children:[
      {
        title: 'Crear',
        link: '/pages/permisos/crear'
      },
      {
        title: 'Listar',
        link: '/pages/permisos/listar'
      }
    ]
  },  
  {
    title: 'Roles',
    icon: 'shield-outline',
    children:[
      {
        title: 'Crear',
        link: '/pages/roles/crear'
      },
      {
        title: 'Listar',
        link: '/pages/roles/listar'
      }
    ]    
  },
  {
    title: 'Rutas',
    icon: 'alert-triangle-outline',    
    children:[
      {
        title: 'Crear',
        link: '/pages/rutas/crear'
      },
      {
        title: 'Listar',
        link: '/pages/rutas/listar'
      }
    ]
  },
  {
    title: 'Usuarios',
    icon: 'people-outline',    
    children:[
      {
        title: 'Crear',
        link: '/pages/usuarios/crear'
      },
      {
        title: 'Listar',
        link: '/pages/usuarios/listar'
      }
    ]
  },  
  {
    title: 'Veterinarios',
    icon: 'award-outline',
    children:[
      {
        title: 'Crear',
        link: '/pages/veterinarios/crear'
      },
      {
        title: 'Listar',
        link: '/pages/veterinarios/listar'
      }
    ]    
  },
  {
    title: 'Vuelos',
    icon: 'compass-outline',    
    children:[
      {
        title: 'Crear',
        link: '/pages/vuelos/crear'
      },
      {
        title: 'Listar',
        link: '/pages/vuelos/listar'
      }
    ]
  },
];
