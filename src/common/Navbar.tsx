import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  TextField,
  Container,
  Stack,
  Badge,
  Typography,
  Grid,
  Menu,
  MenuItem,
  InputAdornment,
  MenuList,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import logo from '../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from '../hooks/useForm';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeToCart } from '../redux/slices/cart.slice';
import { useNavigate } from 'react-router-dom';
import { dbProducts } from '../dbProducts';
import { ProductContext } from '../context/ProductProvider';

const initialState = {
  searchProduct: '',
};
type Props = {
  changeSearchProduct: (product: string) => void;
};

const categorys = [...new Set(dbProducts.map((item) => item.category))];

const Navbar: React.FC<Props> = ({ changeSearchProduct }) => {
  const [inputs, handleChange, reset] = useForm(initialState);
  const { searchProduct } = inputs;

  /* Menu Nav */
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /* End Menu Nav  */

  /* Cart Menu */
  const [anchorElCartMenu, setAnchorElCartMenu] =
    React.useState<null | HTMLElement>(null);

  const openCartMenu = Boolean(anchorElCartMenu);

  const handleClickCartMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
    setAnchorElCartMenu(e.currentTarget);
  };

  const handleCloseCartMenu = () => {
    setAnchorElCartMenu(null);
  };

  /* End Cart Menu */

  /* Category Menu  */
  const [anchorElCategoryMenu, setAnchorElCategoryMenu] =
    React.useState<null | HTMLElement>(null);

  const openCategoryMenu = Boolean(anchorElCategoryMenu);

  const handleClickCategoryMenu = (
    e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>,
  ) => {
    setAnchorElCategoryMenu(e.currentTarget);
  };

  const handleCloseCategoryMenu = () => {
    setAnchorElCategoryMenu(null);
  };

  /* End Category Menu  */

  const context = React.useContext(ProductContext);

  const navigate = useNavigate();

  const items = useAppSelector((state) => state.cartReducer);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeSearchProduct(searchProduct);
    navigate('/SearchProduct');
    reset();
  };

  const handleRemoveToCart = (id: number | undefined) => {
    dispatch(
      removeToCart({
        id,
      }),
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="inherit">
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 3 }}>
            {/* Mobile Nav */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* Home Button */}
                <MenuItem
                  sx={{ justifyContent: 'center', fontSize: '1.1rem' }}
                  onClick={() => {
                    navigate('/');
                    handleCloseNavMenu();
                  }}
                >
                  Home
                </MenuItem>
                {/* Categorys Button */}
                <MenuItem
                  onClick={handleClickCategoryMenu}
                  aria-controls={openCategoryMenu ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openCategoryMenu ? 'true' : undefined}
                  sx={{ fontSize: '1.1rem', justifyContent: 'center' }}
                >
                  Categorias
                </MenuItem>
                <Menu
                  anchorEl={anchorElCategoryMenu}
                  open={openCategoryMenu}
                  onClose={handleCloseCategoryMenu}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {categorys.map((category, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        handleCloseCategoryMenu();
                        handleCloseNavMenu();
                        navigate(`/${category}`);
                      }}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Menu>
                {/* Contact Button */}
                <MenuItem
                  sx={{ justifyContent: 'center', fontSize: '1.1rem' }}
                  onClick={() => {
                    navigate('/Contacto');
                    handleCloseNavMenu();
                  }}
                >
                  Contacto
                </MenuItem>
              </Menu>
            </Box>
            <Box
              component="form"
              sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, ml: 2 }}
              onSubmit={handleSubmit}
            >
              <TextField
                variant="outlined"
                color="info"
                focused
                placeholder="Buscar Producto"
                name="searchProduct"
                onChange={handleChange}
                value={searchProduct}
                size="small"
                fullWidth
                sx={{ border: 'none' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="info" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Desktop Buttons */}
            <Stack
              display={{ xs: 'none', md: 'flex' }}
              direction="row"
              spacing={2}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                width="58px"
                sx={{ p: 1 }}
              />

              {/* Home Button */}
              <Button
                size="large"
                sx={{ fontSize: '1.1rem' }}
                color="inherit"
                onClick={() => navigate('/')}
              >
                Home
              </Button>
              {/* Categorys Button */}
              <Button
                size="large"
                sx={{ fontSize: '1.1rem' }}
                color="inherit"
                aria-controls={openCategoryMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openCategoryMenu ? 'true' : undefined}
                onClick={handleClickCategoryMenu}
              >
                Categorias
              </Button>
              <Menu
                anchorEl={anchorElCategoryMenu}
                open={items.length === 0 ? false : openCategoryMenu}
                onClose={handleCloseCategoryMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {categorys.map((category, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleCloseCategoryMenu();
                      navigate(`/${category}`);
                    }}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Menu>
              {/* Contact Button */}
              <Button
                size="large"
                sx={{ fontSize: '1.1rem' }}
                color="inherit"
                onClick={() => navigate('/Contacto')}
              >
                Contacto
              </Button>
            </Stack>

            {/* Cart Icon & MenuCart (it's in both) */}
            <IconButton
              id="button-cart"
              size="large"
              aria-haspopup="true"
              onClick={handleClickCartMenu}
              aria-controls={openCartMenu ? 'menu-cart' : undefined}
              aria-expanded={openCartMenu ? 'true' : undefined}
              disabled={items.length === 0 ? true : false}
            >
              <Badge badgeContent={items.length} color="error">
                <ShoppingCartOutlinedIcon sx={{ color: '#000' }} />
              </Badge>
            </IconButton>
            <Menu
              id="menu-cart"
              sx={{ display: `${items.length === 0 ? 'none' : 'block'}` }}
              open={openCartMenu}
              anchorEl={anchorElCartMenu}
              onClose={handleCloseCartMenu}
              MenuListProps={{
                'aria-labelledby': 'button-cart',
              }}
              PaperProps={{
                style: {
                  maxWidth: '350px',
                  maxHeight: '440px',
                },
              }}
            >
              <MenuList>
                {items.map((item) => (
                  <MenuItem key={item.id}>
                    <Grid container alignItems="center">
                      {/* MenuCart img */}
                      <Grid item xs={3}>
                        <img
                          src={item.img}
                          alt={`image de ${item.title}`}
                          width="100%"
                        />
                      </Grid>
                      {/* MenuCart Title */}
                      <Grid item xs={7}>
                        <Typography gutterBottom>
                          {item.title.substring(0, 18)}
                        </Typography>
                      </Grid>
                      {/* MenuCart Actions */}
                      <Grid item xs={2}>
                        <Stack>
                          <IconButton
                            onClick={() => {
                              handleCloseCartMenu();
                              context!.changeProduct(item);
                              navigate(`/Product/${item.id}`);
                            }}
                          >
                            <ShoppingCartCheckoutIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              if (items.length === 1) {
                                handleCloseCartMenu();
                                handleRemoveToCart(item.id);
                              }
                              return handleRemoveToCart(item.id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </Grid>
                    </Grid>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {/* Desktop Form */}
            <Box
              component="form"
              sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, ml: 2 }}
              onSubmit={handleSubmit}
            >
              <TextField
                variant="outlined"
                color="info"
                focused
                placeholder="Buscar Producto"
                name="searchProduct"
                onChange={handleChange}
                value={searchProduct}
                size="small"
                fullWidth
                sx={{ border: 'none' }}
              />
              <Button
                sx={{ padding: 0, ml: '1px' }}
                variant="contained"
                color="primary"
                type="submit"
              >
                <SearchIcon fontSize="large" />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
