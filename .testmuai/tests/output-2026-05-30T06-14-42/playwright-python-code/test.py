import os
import testmu
from testmu import expect, var, set_var
from playwright.async_api import Page

testmu.configure(
    build="c621e9bf-e405-4ba5-926e-a1eea87e69fe",
    name="Web || swapnilbtestmuai || TC-73",
    tc_id="TC-73",
    network=True,
    default_action_timeout_ms=10000,
    default_navigation_timeout_ms=30000,
)

@testmu.test
async def test(page: Page):
    async with testmu.step('Navigate to https://swapbiswas.com'):
        await page.goto("https://swapbiswas.com")
    
    async with testmu.step('Confirming the swapbiswas.com homepage is loaded'):
        await page.wait_for_timeout(500)
    
    async with testmu.step('Opening the Blog section from the top navigation'):
        _loc_1 = page.locator("#menu-content >> internal:role=link[name=\"Blog\"i]")
        
        await _loc_1.click()
    
    async with testmu.step('Scrolling down to view blog post links'):
        await page.wait_for_load_state('domcontentloaded', timeout=5000)
        await page.evaluate('window.scrollBy(0, 700)')
    
    async with testmu.step('Opening the first blog post from the blog listing'):
        _loc_2 = page.locator("internal:role=link[name=\"LLM Optimization: How to Get\"i]")
        
        await _loc_2.click()
    
    async with testmu.step('Opening the Tools section from the top navigation'):
        _loc_3 = page.locator("#menu-content >> internal:role=link[name=\"Tools\"i]")
        
        await _loc_3.click()
    
    async with testmu.step('PRIMARY: Site navigation link; role=link; text="Tools" | HINTS: container=top navigation bar'):
        coords = await testmu.get_vision_coordinates(page, 'PRIMARY: Site navigation link; role=link; text="Tools" | HINTS: container=top navigation bar', "click", 680, 63)
        await page.mouse.click(coords['x'], coords['y'])
        
    
    async with testmu.step('Scrolling down to reach the tool links'):
        await page.wait_for_load_state('domcontentloaded', timeout=5000)
        await page.evaluate('window.scrollBy(0, 650)')
    
    async with testmu.step('Navigate to https://swapbiswas.com/tools/battlecard-generator/'):
        await page.goto("https://swapbiswas.com/tools/battlecard-generator/")
    
    async with testmu.step('Closing the newsletter popup on the Battlecard Generator page'):
        _loc_4 = page.locator("internal:role=button[name=\"Close newsletter popup\"i]")
        
        await _loc_4.click()
    
    async with testmu.step('Opening Tools hub from the battlecard generator page'):
        _loc_5 = page.locator("#menu-content >> internal:role=link[name=\"Tools\"i]")
        
        await _loc_5.click()
    
    async with testmu.step('PRIMARY: "Open tool" link for Sales Battlecard Generator; role=link; text="Open tool" | HINTS: first card under heading "Free PMM Tools", left column'):
        coords = await testmu.get_vision_coordinates(page, 'PRIMARY: "Open tool" link for Sales Battlecard Generator; role=link; text="Open tool" | HINTS: first card under heading "Free PMM Tools", left column', "click", 185, 627)
        await page.mouse.click(coords['x'], coords['y'])
        
    
    async with testmu.step('Clicking Tools breadcrumb to return to Tools hub'):
        _loc_6 = page.locator("internal:label=\"Breadcrumb\"i >> internal:role=link[name=\"Tools\"i]")
        
        await _loc_6.click()
    
    async with testmu.step('PRIMARY: "Open tool" link for Sales Battlecard Generator; role=link; text="Open tool" | HINTS: first tool card under heading "Free PMM Tools", left column'):
        coords = await testmu.get_vision_coordinates(page, 'PRIMARY: "Open tool" link for Sales Battlecard Generator; role=link; text="Open tool" | HINTS: first tool card under heading "Free PMM Tools", left column', "click", 187, 627)
        await page.mouse.click(coords['x'], coords['y'])
        
    
    async with testmu.step('Clicking breadcrumb Tools to return to the Tools hub'):
        _loc_7 = page.locator("internal:label=\"Breadcrumb\"i >> internal:role=link[name=\"Tools\"i]")
        
        await _loc_7.click()
    
    async with testmu.step('PRIMARY: "Open tool" link for Buyer Persona Generator; role=link; text="Open tool" | HINTS: tool card in middle column under heading "Persona & ICP"'):
        coords = await testmu.get_vision_coordinates(page, 'PRIMARY: "Open tool" link for Buyer Persona Generator; role=link; text="Open tool" | HINTS: tool card in middle column under heading "Persona & ICP"', "click", 619, 627)
        await page.mouse.click(coords['x'], coords['y'])
        
    
    async with testmu.step('PRIMARY: "Open tool" link for Buyer Persona Generator; role=link; text="Open tool" | HINTS: card titled "Buyer Persona Generator" in the middle column'):
        coords = await testmu.get_vision_coordinates(page, 'PRIMARY: "Open tool" link for Buyer Persona Generator; role=link; text="Open tool" | HINTS: card titled "Buyer Persona Generator" in the middle column', "click", 754, 624)
        await page.mouse.click(coords['x'], coords['y'])
        
    
    async with testmu.step('Clicking breadcrumb link to return to Tools hub'):
        _loc_8 = page.locator("internal:label=\"Breadcrumb\"i >> internal:role=link[name=\"Tools\"i]")
        
        await _loc_8.click()
    
    async with testmu.step('PRIMARY: "Open tool" link for Product Launch Plan Template; role=link; text="Open tool" | HINTS: in the right-most tool card under heading "LAUNCH"'):
        coords = await testmu.get_vision_coordinates(page, 'PRIMARY: "Open tool" link for Product Launch Plan Template; role=link; text="Open tool" | HINTS: in the right-most tool card under heading "LAUNCH"', "click", 1050, 627)
        await page.mouse.click(coords['x'], coords['y'])
        
    
    async with testmu.step('PRIMARY: "Open tool" link for Product Launch Plan Template; role=link; text="Open tool" | HINTS: in the right-most tool card under heading "LAUNCH"'):
        coords = await testmu.get_vision_coordinates(page, 'PRIMARY: "Open tool" link for Product Launch Plan Template; role=link; text="Open tool" | HINTS: in the right-most tool card under heading "LAUNCH"', "click", 1056, 626)
        await page.mouse.click(coords['x'], coords['y'])
        
    
    async with testmu.step('Clicking breadcrumb Tools link to return to Tools hub'):
        _loc_9 = page.locator("internal:label=\"Breadcrumb\"i >> internal:role=link[name=\"Tools\"i]")
        
        await _loc_9.click()


if __name__ == "__main__":
    testmu.run(test)