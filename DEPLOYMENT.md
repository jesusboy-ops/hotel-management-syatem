# 🚀 Paradise Hotel - Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Git installed on your machine

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project directory**
   ```bash
   cd "hotel app"
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select your scope/team
   - Link to existing project or create new one
   - Accept default settings

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub (Recommended)

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., "paradise-hotel")
   - Don't initialize with README

2. **Push your code to GitHub**
   ```bash
   cd "hotel app"
   git init
   git add .
   git commit -m "Initial commit - Paradise Hotel"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/paradise-hotel.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Configure project:
     - **Framework Preset**: Vite
     - **Root Directory**: `./` (or leave empty)
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click "Deploy"

4. **Wait for deployment** (usually takes 1-2 minutes)

### Option 3: Deploy via Vercel Dashboard

1. **Prepare your project**
   - Ensure all files are saved
   - Build is successful (`npm run build`)

2. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New..." → "Project"

3. **Import Git Repository**
   - Connect your GitHub/GitLab/Bitbucket account
   - Select the repository
   - Click "Import"

4. **Configure Build Settings**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

## Post-Deployment

### Custom Domain (Optional)
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables (If needed in future)
1. Go to project settings
2. Navigate to "Environment Variables"
3. Add variables for production, preview, or development

## Vercel Configuration

The project includes a `vercel.json` file with the following configuration:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes are handled by React Router (SPA routing).

## Build Output

After running `npm run build`, you'll find:
- `dist/` folder containing production-ready files
- Optimized JavaScript bundles
- Minified CSS
- Compressed assets

## Automatic Deployments

Once connected to GitHub:
- **Production**: Every push to `main` branch triggers production deployment
- **Preview**: Every pull request gets a unique preview URL
- **Rollback**: Easy rollback to previous deployments via dashboard

## Troubleshooting

### Build Fails
- Check Node.js version (should be 16+)
- Run `npm install` to ensure all dependencies are installed
- Run `npm run build` locally to test

### Routes Not Working
- Ensure `vercel.json` is in the root directory
- Check that rewrites configuration is correct

### Styling Issues
- Verify Tailwind CSS is properly configured
- Check `postcss.config.js` and `tailwind.config.js`

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Compression (Gzip/Brotli)
- ✅ Image optimization
- ✅ Edge caching
- ✅ DDoS protection

## Monitoring

Access deployment analytics:
- Visit your project dashboard
- Check "Analytics" tab for:
  - Page views
  - Performance metrics
  - Error tracking
  - Web Vitals

## Demo Credentials

Remember to share these credentials with users:

**User Dashboard:**
- Email: `user@paradisehotel.com`
- Password: `user2024`

**Admin Dashboard:**
- Email: `admin@paradisehotel.com`
- Password: `admin@2024`

**Orders Dashboard:**
- Email: `kitchen@paradisehotel.com`
- Password: `kitchen2024`

**Reception Dashboard:**
- Email: `reception@paradisehotel.com`
- Password: `reception2024`

**Demo Account (All Access):**
- Email: `demo@paradisehotel.com`
- Password: `demo123`

## Support

For issues or questions:
- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- React Router: https://reactrouter.com/

---

**Deployment Status**: ✅ Ready for Production

**Last Build**: Successful  
**Build Time**: ~5.59s  
**Bundle Size**: ~311.83 kB (88.38 kB gzipped)
