const nav = () => {
  return `
  <header class="p-[15px]  w-full bg-white" style="border: 1px solid #e5e7eb">
  <div class="container">
      <div class="flex justify-between items-center">
          <nav>
              <ul class="flex">
                  <li class="px-[20px] p-[10px] text-[20px]"><a href="/pages/product.html">Products</a></li>
                  <li class="px-[20px] p-[10px] text-[20px]"><a href="/pages/cart.html">Cart </a></li>
              </ul>
          </nav>
  
          <div class="logo ">
              <a href="/index.html"><img src="/img/logo.png" width="170px" class="mt-[5px]" alt=""></a>
          </div>
  
          <div class="btns">
              <button class=" py-[10px] px-[20px] m-[5px] bg-[#8231d3] text-white rounded-[6px] font-normal"><a href="/pages/signin.html" >Sign in</a></button>
              <button class="py-[10px] px-[20px] m-[5px] bg-[#8231d3] text-white rounded-[6px] font-normal"><a href="/pages/signup.html" >Sign up</a></button>
          </div>
      </div>
  </div>
</header>`;
};

nav();
export default nav();
