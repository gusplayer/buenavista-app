import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screens/login/Login';
import LoginMail from '../screens/login/LoginMail';
import Register from '../screens/login/Register';
import ForgetPass from '../screens/login/ForgetPass';
import Dashboard from '../screens/Dashboard';
import ListProducts from '../screens/products/ListProducts';
import NewProductBarCode from '../screens/products/NewProductBarCode';
import NewProductPhoto from '../screens/products/NewProductPhoto';
import NewProductInfo from '../screens/products/NewProductInfo';
import EditProduct from '../screens/products/EditProduct';
import DetailsProducts from '../screens/products/DetailsProduct';
import Chat from '../screens/chat/Chat';
import Blog from '../screens/blog/Blog';
import Helpdesk from '../screens/helpdesk/helpdesk';
import ListSales from '../screens/sales/ListSales';
import ListProductSales from '../screens/sales/ListProductSales';
import SaleDetails from '../screens/sales/saleDetails';
import SalePayment from '../screens/payment/SalePayment';
import NewSaleBarcode from '../screens/sales/newSaleBarcode';
import NewSaleGeneralDetails from '../screens/sales/newSaleGeneralDetails';
import NewSaleProductDetails from '../screens/sales/newSaleProductDetails';
import ListCostumers from '../screens/costumers/listCostumers';
import DetailsCostumer from '../screens/costumers/detailsCostumer';
import NewCostumer from '../screens/costumers/newCostumer';
import Settings from '../screens/settings/Settings';
import Terms from '../screens/login/Terms';
import Soon from '../screens/Soon';

export const LoginNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    LoginMail: {
      screen: LoginMail,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    },
    ForgetPass: {
      screen: ForgetPass,
      navigationOptions: {
        header: null
      }
    },
    Terms: {
      screen: Terms
    }
  },
  {
    initialRouteName: 'LoginMail'
  }
);
export const DashNavigator = StackNavigator(
  {
    Dash: {
      screen: Dashboard,
      navigationOptions: {
        header: null
      }
    },
    NewProductBarCode: {
      screen: NewProductBarCode,
      navigationOptions: {
        title: 'Lector de código de barras'
      }
    },
    NewProductPhoto: {
      screen: NewProductPhoto,
      navigationOptions: { title: 'Foto del Producto' }
    },
    NewProductInfo: {
      screen: NewProductInfo,
      navigationOptions: { title: 'Información', header: null }
    },
    EditProduct: {
      screen: EditProduct,
      navigationOptions: { title: 'Inventario de la Tienda' }
    },
    ListProducts: {
      screen: ListProducts,
      navigationOptions: { title: 'Mi Inventario', header: null }
    },
    DetailsProducts: {
      screen: DetailsProducts,
      navigationOptions: { title: 'Mi Inventario', header: null }
    },
    Chat: {
      screen: Chat,
      navigationOptions: { title: 'Mensajes' }
    },
    Sales: {
      screen: ListSales,
      navigationOptions: { title: 'Mis ventas', header: null }
    },
    SaleDetails: {
      screen: SaleDetails,
      navigationOptions: { title: 'Detalles de la venta', header: null }
    },
    SalePayment: {
      screen: SalePayment,
      navigationOptions: { title: 'Detalles de la venta', header: null }
    },
    ListProductSales: {
      screen: ListProductSales,
      navigationOptions: { title: 'Detalles de la venta', header: null }
    },
    NewSaleBarcode: {
      screen: NewSaleBarcode,
      navigationOptions: { title: 'Escanear código de barras' }
    },
    NewSaleGeneralDetails: {
      screen: NewSaleGeneralDetails,
      navigationOptions: { title: 'Generar venta', header: null }
    },
    // NewSaleProductDetails: {
    //   screen: NewSaleProductDetails,
    //   navigationOptions: { title: "Proceso de venta", header: null }
    // },
    ListCostumers: {
      screen: ListCostumers,
      navigationOptions: { title: 'Clientes', header: null }
    },
    NewCostumer: {
      screen: NewCostumer,
      navigationOptions: { title: 'Registrar Cliente', header: null }
    },
    DetailsCostumer: {
      screen: DetailsCostumer,
      navigationOptions: { title: 'Registrar Cliente', header: null }
    },
    Blog: {
      screen: Blog,
      navigationOptions: { title: 'Blog' }
    },
    Helpdesk: {
      screen: Helpdesk,
      navigationOptions: { title: 'Ayuda' }
    },
    Settings: {
      screen: Settings,
      navigationOptions: { title: 'Ajustes de la cuenta' }
    },
    Soon: {
      screen: Soon,
      navigationOptions: { title: 'Volver al menú' }
    }
  },
  {
    initialRouteName: 'Dash'
  }
);
