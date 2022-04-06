export * from './account.service';
import { AccountService } from './account.service';
export * from './migration.service';
import { MigrationService } from './migration.service';
export * from './plan.service';
import { PlanService } from './plan.service';
export * from './region.service';
import { RegionService } from './region.service';
export * from './siteLive.service';
import { SiteLiveService } from './siteLive.service';
export * from './team.service';
import { TeamService } from './team.service';
export * from './template.service';
import { TemplateService } from './template.service';
export * from './ticket.service';
import { TicketService } from './ticket.service';
export * from './utils.service';
import { UtilsService } from './utils.service';
export const APIS = [AccountService, MigrationService, PlanService, RegionService, SiteLiveService, TeamService, TemplateService, TicketService, UtilsService];