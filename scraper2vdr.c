/**
 *  osd2web plugin for the Video Disk Recorder
 *
 *  scraper2vdr.c
 *
 *  (c) 2018 Jörg Wendel
 *
 * This code is distributed under the terms and conditions of the
 * GNU GENERAL PUBLIC LICENSE. See the file COPYING for details.
 *
 **/

//***************************************************************************
// Includes
//***************************************************************************

#include <vdr/plugin.h>

#include "lib/common.h"
#include "scraper2vdr.h"
#include "config.h"

//***************************************************************************
// Get Scraper Plugin
//***************************************************************************

cPlugin* getScraperPlugin()
{
   static cPlugin* pScraper = cPluginManager::GetPlugin("scraper2vdr");

   return pScraper;
}

//***************************************************************************
// Get Scraper Media Path
//***************************************************************************

int getScraperMediaPath(const cEvent* event, const cRecording* recording,
                        std::string& bannerPath, std::string& posterPath)
{
   static cEnvironment environment;
   static int envInit = no;

   ScraperGetPosterBannerV2 call;
   cPlugin* pScraper = getScraperPlugin();

   bannerPath = "";
   posterPath = "";

   if (!pScraper)
   {
      tell(2, "Warning: Plugin scraper2vdr not found");
      return fail;
   }

   if (!envInit)
   {
      envInit = yes;
      pScraper->Service("GetEnvironment", &environment);
   }

   call.recording = recording;
   call.event = event;

   if (pScraper->Service("GetPosterBannerV2", &call))
   {
      if (call.type == tSeries && call.banner.path.size() > 0)
      {
         ScraperGetPoster callPoster;

         bannerPath = call.banner.path;

         callPoster.event = event;                   // only one is set
         callPoster.recording = recording;           //  "    "   "  "

         if (pScraper->Service("GetPoster", &callPoster))
            posterPath = callPoster.poster.path;
      }
      else if (call.type == tMovie && call.poster.path.size() > 0 && call.poster.height > 0)
      {
         posterPath = call.poster.path;
      }
   }

   if (environment.basePath.size())
   {
      if (bannerPath.size())
         removeWord(bannerPath, environment.basePath);

      if (posterPath.size())
         removeWord(posterPath, environment.basePath);
   }

   if (bannerPath.size())
      bannerPath = config.scraper2VdrPath + bannerPath;

   if (posterPath.size())
      posterPath = config.scraper2VdrPath + posterPath;

   return bannerPath.size() || posterPath.size() ? success : fail;
}
